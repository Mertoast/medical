import styles from './Text.module.css'

import type { TText } from './types';

export const Text = ({ size = 14, level = 1, children }: TText) => {
  const className = [
    styles.text,
    styles[`text-${size}`]
  ]

  const props = {
    className: className.join(' '),
    children,
  }

  switch (level) {
    case 1:
      return <p {...props} />
  }
}
