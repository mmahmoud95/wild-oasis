import SideNavigation from '@/_components/SideNavigation';

const layout = ({ children }) => {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <div> {children}</div>
        </div>
    );
};

export default layout;
