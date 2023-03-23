import NavBar from "../components/NavBar";
import Spinner from "../assets/spinner.gif";
import NewPollForm from "../components/NewPollForm";

function HomePage({ allPolls, isLoading }) {
  return (
    <div className="min-h-screen mx-8 2xl:mx-80 xl:mx-60 lg:mx-40 md:mx-30 sm:mx-20 flex-row justify-center">
      <NavBar />
      {isLoading ? (
        <img src={Spinner} className="w-7 mx-auto mt-40" />
      ) : (
        <NewPollForm />
      )}
    </div>
  );
}

export default HomePage;