export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 mb-44">
      <div className="max-w-3xl text-center">
        <h1 className="text-whitepink font-bold md:text-6xl text-4xl mb-8 font-aquireBold">
          INSTITUTIONAL REGISTRATION
        </h1>
        
        <div className="bg-lightblue bg-opacity-10 border-2 border-lightblue rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-lightblue font-aquireBold md:text-3xl text-2xl mb-6">
            Registrations Closed
          </h2>
          <p className="text-whitepink md:text-xl text-lg font-trench leading-relaxed mb-4">
            Thank you for your interest in Phenomenon 2024!
          </p>
          <p className="text-lightgray md:text-lg text-base font-trench leading-relaxed">
            This event was held on <span className="text-lightblue font-bold">December 20-21, 2024</span> at St. Joseph's Boys' High School, Bangalore. 
            Institutional/delegation registrations for this event have concluded.
          </p>
        </div>

        <div className="text-whitepink font-trench md:text-lg text-base">
          <p className="mb-4">
            This page is maintained as a portfolio demonstration of the registration system that was used for the live event.
          </p>
          <p className="text-lightgray">
            For information about future events, please visit our <a href="/" className="text-lightblue hover:text-babyblue underline">homepage</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
