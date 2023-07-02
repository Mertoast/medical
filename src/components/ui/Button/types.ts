export type TButton = {
    outlined?: boolean,
    minimal?: React.ReactNode,
    after?: React.ReactNode,
    end?: React.ReactNode,
    children: string,
    onClick?: () => void
  }