import { FC } from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({children}) => {
    return (
        <main className="container mx-auto px-40 align-center min-w-1200">
        <section className="w-full py-16 lg:pb-30">
            <div className="container">
            {children}
            </div>
            </section>
        </main>
    );
}

export default Layout;