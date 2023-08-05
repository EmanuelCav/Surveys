import CardData from "./components/data/cardData"

const Data = () => {
  return (
    <div className="container-data">
      <CardData header="More than 200.000 users" text="Many users have been joined in at least one survey at the moment" card={false} />
      <CardData header="More than 60.000 surveys available" text="You can participate and create surveys" card={true}/>
    </div>
  )
}

export default Data