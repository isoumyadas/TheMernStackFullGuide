import Header from "./components/Header";
import OrderStatus from "./components/OrderStatus";
import Overview from "./components/Overview";
import RevenueCard from "./components/RevenueCard";
import Sidebar from "./components/Sidebar";
import TransactionsText from "./components/TransactionsText";

function App() {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />

      <div className="col-span-5">
        <div>
          <Header />
        </div>

        <div>
          <Overview />
        </div>

        <div className="grid grid-cols-3 gap-3 p-4  ">
          <RevenueCard
            title={"Next Payout"}
            amount={"2,312.23"}
            orderCount={23}
            nextPaymentDate={"Next Payment Date:"}
            date={"Today, 4:00PM"}
          />
          <RevenueCard
            title={"Amount Pending"}
            amount={"67,123.34"}
            orderCount={13}
          />
          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>

        <div>
          <TransactionsText />
        </div>

        <div>
          <OrderStatus />
        </div>
      </div>
    </div>
  );
}

export default App;
