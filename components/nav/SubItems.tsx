import Link from 'next/link';
import React from 'react';

function SubItems(children) {
  return children.map((subItem) => (
    <p key={subItem.key}>
      <Link href={subItem.key}>{subItem.label}</Link>
    </p>
  ));
}

export default SubItems;
