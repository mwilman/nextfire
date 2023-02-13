import {Inter} from '@next/font/google'
import React from "react";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          <button onClick={() => toast.success('hello toast!')}>
              Toast Me!
          </button>
      </div>
  )
}
