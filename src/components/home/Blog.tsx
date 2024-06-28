import blog_data from "@/data/blogData"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from "next-intl";


function BlogSection() {
   const t = useTranslations("Home.blogSection")
   return (
      <div className={`pt-120 pb-90 rel z-1 blog-area`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-x col-lg-8 col-md-10">
                  <div className={`section-title text-center mb-60`}>
                     <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                     <h2>{t("title.first")} <span>{t("title.second")}</span></h2>
                     <p>{t("description")}</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {blog_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className="blog-item">
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                           <div className="post-date">
                              <b>{item.date}</b>
                              <span>dec</span>
                           </div>
                        </div>
                        <div className="blog-item__content">
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <Link href="#">Wade Warren</Link></li>
                              <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comment</Link></li>
                           </ul>
                           <h4><Link href={`blog-details/${item.id}`}>{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href={`blog-details/${item.id}`} className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}

            </div>
         </div>
      </div>
   )
}

export default BlogSection
