import clsx from 'clsx'
import React from 'react'
import reactStringReplace from 'react-string-replace'
import * as z from 'zod'
import { H2, H3 } from '../components/typography'
import { Divider } from '../components/Divider'
import { styled, theme } from '../stitches.config'

const Dot = styled('span', {
  height: 5,
  width: 5,
  borderRadius: '100%',
  display: 'block',
  position: 'absolute',
  top: 12,
  left: -16,
})

const Block = styled('div', {
  marginBottom: 16,
})

const List = styled('ul', {
  lineHeight: 1.8,
  listStyleType: 'disc',
  paddingLeft: 16,
})

const CodeInline = ({ children }: { children: React.ReactNode }) => (
  <code className="text-white border-black/5 bg-black/5 break-words rounded-md border py-0.2 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10">
    {children}
  </code>
)

function labelize(message: string) {
  const findSingleQuotes = /'([^']+)'/gim

  return reactStringReplace(message, findSingleQuotes, (match, i) => <CodeInline key={i}>{match}</CodeInline>)
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
  Safe: theme.colors.success500.value,
  Dangerous: theme.colors.warning500.value,
  Breaking: theme.colors.destructive500.value,
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
    <Block>
      <H3>{titleMap[criticality]}</H3>
      <List>
        {filteredChanges.map((change, key) => (
          <p style={{ position: 'relative' }} key={key}>
            <Dot style={{ backgroundColor: criticalityLevelMapping[criticality] }} />
            {labelize(change.message)}
          </p>
        ))}
      </List>
    </Block>
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
      <H2>{props.item.createdAt.toDateString()}</H2>
      <DiffView changes={props.item.payload.changes} />
      <Divider />
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
