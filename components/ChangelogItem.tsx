import clsx from 'clsx'
import React from 'react'
import reactStringReplace from 'react-string-replace'
import * as z from 'zod'

const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    className="
      inline-block py-1 px-2 mx-1 rounded bg-grey700
      text-white
      text-xs font-medium tracking-widest"
  >
    {children}
  </span>
)

function labelize(message: string) {
  const findSingleQuotes = /'([^']+)'/gim

  return reactStringReplace(message, findSingleQuotes, (match, i) => <Label key={i}>{match}</Label>)
}

const Criticality = z.enum(['Breaking', 'Dangerous', 'Safe'])

const ChangeItem = z.object({
  criticality: Criticality,
  message: z.string().min(1),
})

const HiveWebhookPayload = z.object({
  changes: z.array(ChangeItem.required()),
})

type CriticalityLevel = z.infer<typeof Criticality>
type ChangeItems = z.infer<typeof HiveWebhookPayload>['changes']

const titleMap: Record<CriticalityLevel, string> = {
  Safe: 'Safe Changes',
  Breaking: 'Breaking Changes',
  Dangerous: 'Dangerous Changes',
}

const criticalityLevelMapping = {
  Safe: 'text-green400',
  Dangerous: 'text-warning500',
  Breaking: 'text-destructive500',
} as Record<CriticalityLevel, string>

const ChangesBlock = ({
  changes,
  criticality,
}: {
  changes: ChangeItems
  criticality: z.infer<typeof Criticality>
}): React.ReactElement | null => {
  const filteredChanges = changes.filter((c) => c.criticality === criticality)

  if (!filteredChanges.length) {
    return null
  }

  return (
    <div>
      <h2 className="mb-2 text-lg font-medium">{titleMap[criticality]}</h2>
      <ul className="list-inside list-disc pl-3 text-base leading-relaxed">
        {filteredChanges.map((change, key) => (
          <li key={key} className={clsx(criticalityLevelMapping[criticality])}>
            <span className="text-gray-500 dark:text-neutral-500 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent">
              {labelize(change.message)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const DiffView = ({ changes }: { changes: ChangeItems }): React.ReactElement | null => {
  return (
    <div className="space-y-3 p-6">
      <ChangesBlock changes={changes} criticality={'Breaking'} />
      <ChangesBlock changes={changes} criticality={'Dangerous'} />
      <ChangesBlock changes={changes} criticality={'Safe'} />
    </div>
  )
}

const SchemaChangelogItemSchema = z.object({
  id: z.string(),
  createdAt: z.string().transform((s) => new Date(s)),
  payload: HiveWebhookPayload,
})

export const SchemaChangelogItemsSchema = z.array(SchemaChangelogItemSchema)

const ChangelogItem = (props: { item: z.infer<typeof SchemaChangelogItemSchema> }) => {
  return (
    <div>
      <h2 className="text-xl py-2 my-2">{props.item.createdAt.toDateString()}</h2>
      <DiffView changes={props.item.payload.changes} />
      <hr />
    </div>
  )
}

export const ChangelogItems = (props: { items: z.infer<typeof SchemaChangelogItemsSchema> }) => {
  const filteredItems = props.items.filter((item) => item.payload.changes.length > 0)
  return (
    <div>
      {filteredItems.map((item) => (
        <ChangelogItem key={item.id} item={item} />
      ))}
    </div>
  )
}
