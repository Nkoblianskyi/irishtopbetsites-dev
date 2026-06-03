import type { ReactNode } from "react"

interface PageWidthFrameProps {
  children: ReactNode
}

export function PageWidthFrame({ children }: PageWidthFrameProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-3 max-w-[1580px] relative">
        <div className="w-full min-w-0">{children}</div>
      </div>
    </div>
  )
}
