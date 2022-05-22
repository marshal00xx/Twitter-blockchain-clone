import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
const styles = {
  wrapper: `flex h-screen w-screen select-none bg-[#15202b] text-white `,
  content: `max-w-[1400px] w-2/3 flex justify-between ml-10 mt-2`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <Feed />
        <h2>Widgets</h2>
      </div>
    </div>
  )
}

export default Home
