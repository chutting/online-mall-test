import React from 'react'

import { GlobalProvider } from './stores'

const providers = [GlobalProvider]

export type IProps = {
  children?: JSX.Element[] | JSX.Element | React.ReactNode
  className?: string
}

const Provider = (props: IProps): any =>
  providers.reduceRight((children, Wrapper) => <Wrapper>{children}</Wrapper>, props.children)

export default Provider
