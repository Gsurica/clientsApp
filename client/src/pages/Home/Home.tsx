import { AsideMenu } from "../../components/AsideMenu/AsideMenu"
import { Footer } from "../../components/global/Footer"
import { Header } from "../../components/global/Header"
import { Layout } from "../../components/layout/Layout"

export const Home = () => {
    return (
        <Layout header={<Header />} footer={<Footer />}>
            Home Page
        </Layout>
    )
}
