import Sidebar from "./component/sidebar";

import {personalData} from "../data/page-data";

import "./global.css"
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body className = "flex flex-col sm:flex-row">
        <Sidebar data = {personalData}/>
        <main className = 'grow-ful p-16  w-full sm:basis-2/3 ml-auto'>{children}</main>
        </body>
    </html>
  )
}
