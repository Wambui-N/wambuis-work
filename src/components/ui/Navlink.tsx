'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavlinkProps {
  path: string;
  label: string;
}

const Navlink = ({ path, label }: NavlinkProps) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === path);
  }, [pathname, path]);

  return (
    <Link
      href={path}
      className={clsx('py-[1px]', {
        'border-b-2 border-black': isActive,
      })}
    //   TODO add hover animations
    >
      {label}
    </Link>
  );
};

export default Navlink;