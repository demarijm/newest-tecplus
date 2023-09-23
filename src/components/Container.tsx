import clsx from 'clsx'

export function Container({ className, children }) {
  return (
    <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </div>
  )
}
