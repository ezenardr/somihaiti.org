import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/Footer"
import HeaderOne from "@/layout/Header"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Breadcrumb page_title="Error Page" page_list="404" style={false} />
            <ErrorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default NotFound;
