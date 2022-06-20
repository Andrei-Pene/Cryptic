import GradientComp from "../Components/GradientComp"
import CoinTable from "../Components/CoinTable";
import PostsList from "../Components/PostList";
import ModalComponent from "../Components/ModalComponent";


 const Home = ({coins}:any) => {
   
  return (
      <GradientComp
         color="green" 
         roundImage
         title="Cryptic"
         image={'https://bit.ly/dan-abramov'}
         >
        <CoinTable coins={coins} />
        <PostsList coins={coins} />
        <ModalComponent coins={coins} />

        
      </GradientComp>
    
  )
}
export default Home;

export async function getServerSideProps() {
    
  try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await res.json();
        const filteredData = data.map((coin) => (
           {
            name: coin.name,
            image: coin.image,
            current_price : coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h
          }
        ))
       
     
      
      return {
        props: {
            coins: filteredData
        } 
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  };









  







