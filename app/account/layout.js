import SideNavigation from '@/_components/SideNavigation';

const layout = ({ children }) => {
    return (
        <div className="grid lg:grid-cols-[16rem_1fr] grid-cols-1 h-full gap-12">
            <SideNavigation />
            <div className='w-full'> {children}</div>
        </div>
    );
};

export default layout;
