import { Header } from "./header"
import { MenuBar } from "./menubar"

export const BaseLayout = ({children}:{
    children:React.ReactNode
}) => {
    return <>
        <Header />
        <main>
        <div style={{margin:"50px 0px 80px",padding:"20px"}}>
            {children}
        </div>
        <MenuBar></MenuBar>
        </main>
    </>
}