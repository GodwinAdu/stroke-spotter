
interface PageHeaderProps{
    heading: string;
    date?: string
}

const PageHeader = ({
     heading, date 
    } : PageHeaderProps) => {
    return (
      <div className="bg-gray-100 p-5 md:p-8 mb-6 rounded-md shadow">
        <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600">{date}</p>
      </div>
    );
  };


  export default PageHeader;