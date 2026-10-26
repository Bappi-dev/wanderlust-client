import AddDestinationForm from "@/components/destination/addDestinationForm";

const AddDestinationPage = () => {


  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
      <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Add New Travel Package
      </h1>

      <AddDestinationForm  />
    </section>
  );
};

export default AddDestinationPage;
