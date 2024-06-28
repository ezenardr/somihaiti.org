import {useLocale} from "next-intl"
import Link from "next/link";
const Breadcrumb = ({ page_title, page_list, style }: any) => {
  const locale = useLocale()
  return (
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65">
      <div className="container">
        <div className="row justify-content-center">
          <div className={`${style ? "col-lg-12" : "col-xl-7 col-lg-8"}`}>
            <div className="breadcrumb-inner text-center">
              <h2 className="page-title">{page_title}</h2>
              {/*<ul className="page-list">*/}
              {/*  <li><Link href={`/${locale}`}>Home</Link></li>*/}
              {/*  <li>{page_list}</li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
