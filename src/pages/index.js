import { Jumbotron } from "@/components/containers/Jumbotron"
import { DefaultGlobalLayout } from "@/components/layouts/DefaultGlobalLayout"
import { DefaultPageLayout } from "@/components/layouts/DefaultPageLayout"
import { Layout1 } from "@/components/containers/Layout 1"
import { Layout2 } from "@/components/containers/Layout 2"
import { Layout3 } from "@/components/containers/Layout 3"


const Home = () => {

  return (
      <div className="page">
        <DefaultGlobalLayout>
          <DefaultPageLayout>
            <DefaultPageLayout.Position jumbotron>
              <Jumbotron/>
            </DefaultPageLayout.Position>
          </DefaultPageLayout>
        </DefaultGlobalLayout>
        <Layout1/>
        <Layout2/>
        <Layout3/>
      </div>
        
      
  
  )
}
export default Home