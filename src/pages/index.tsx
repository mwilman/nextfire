import {Inter} from '@next/font/google'
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Link
            href={{pathname: '/[username]',
            query: {username: 'jeffd23'}
        }}
            prefetch={false}>
            <a>Jeff's profile</a>
        </Link>
      </div>
  )
}
