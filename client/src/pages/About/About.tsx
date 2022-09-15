import { Footer } from "../../components/global/Footer"
import { Header } from "../../components/global/Header"
import { Layout } from "../../components/layout/Layout"

export const About: React.FC = () => {
    return (
        <Layout header={<Header />} footer={<Footer />}>
            <h1>About Page</h1>
        </Layout>
    )
}