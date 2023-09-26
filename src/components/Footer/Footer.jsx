function Footer() {
  return (
    <div className="border-2 rounded-md p-4 text-center mt-4">
      <h1 className="font-bold text-lg">
        Made By<span className="text-orange-600">{" Prathmesh Vhatkar "} </span>{" "}
        with ❤️
      </h1>
      <h1>
        Copyright Notice:The data and information used in this project are
        sourced from the, <span className="font-bold">Swiggy public API</span>.
        This project, <span className="font-bold">Hungry Hub</span> is created
        solely for portfolio and educational purposes and to practice and show
        the skills in the React UI Framework, and it is not intended for any
        commercial or financial gain.{" "}
        <span className="font-bold">
          All rights, trademarks, and ownership of the data used in this project
          belong to Swiggy.
        </span>{" "}
        This project is not affiliated with or endorsed by Swiggy in any way.
      </h1>
    </div>
  );
}

export default Footer;
