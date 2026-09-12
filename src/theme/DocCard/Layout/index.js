import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Heading from '../Heading';
import styles from './styles.module.css';
function Container({className, href, children}) {
  return (
    <Link
      href={href}
      className={clsx(
        'card padding--lg',
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        className,
      )}>
      {children}
    </Link>
  );
}
export default function DocCardLayout({
  item,
  className,
  href,
  icon,
  title,
  description,
}) {
  return (
    <Container href={href} className={className}>
      <Heading item={item} icon={icon} title={title} />
    </Container>
  );
}
