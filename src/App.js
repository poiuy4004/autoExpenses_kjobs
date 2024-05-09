import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [offlineValue, setOfflineValue] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0,
  })
  const [onlineValue, setOnlineValue] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0,
  })
  const personExpensesObject = {
    offline: {
      cap: 1600000,
      hope: 1600000,
      "4u": 1200000,
      flare: 1200000,
      short: 250000
    },
    online: {
      cap: 1300000,
      hope: 1300000,
      "4u": 975000,
      flare: 975000,
      short: 250000
    }
  }
  const [offerOfflineExpensesObject, setOfferOfflineExpensesObject] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 50000
  })
  const [offerOnlineExpensesObject, setOfferOnlineExpensesObject] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 50000
  })
  const [offlineRound, setOfflineRound] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0
  })
  const [onlineRound, setOnlineRound] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0
  })
  const [offlineTotal, setOfflineTotal] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0
  })
  const [onlineTotal, setOnlineTotal] = useState({
    cap: 0,
    hope: 0,
    "4u": 0,
    flare: 0,
    short: 0
  })
  const [lastValue, setLastValue] = useState(0)
  useEffect(()=>{
    setOfferOfflineExpensesObject({
      cap: offlineValue.cap>15.99? 800000 : offlineValue.cap>13.99? 700000 : offlineValue.cap>11.99? 600000 : offlineValue.cap>9.99? 500000 : 400000,
      hope: offlineValue.hope>15.99? 800000 : offlineValue.hope>13.99? 700000 : offlineValue.hope>11.99? 600000 : offlineValue.hope>9.99? 500000 : 400000,
      "4u": (offlineValue["4u"]>15.99? 800000 : offlineValue["4u"]>13.99? 700000 : offlineValue["4u"]>11.99? 600000 : offlineValue["4u"]>9.99? 500000 : 400000)/4*3,
      flare: (offlineValue.flare>15.99? 800000 : offlineValue.flare>13.99? 700000 : offlineValue.flare>11.99? 600000 : offlineValue.flare>9.99? 500000 : 400000)/4*3,
      short: 50000
    })
  },[offlineValue])
  useEffect(()=>{
    setOfferOnlineExpensesObject({
      cap: onlineValue.cap>11.99? 500000 : onlineValue.cap>8.99? 400000 : onlineValue.cap>5.99? 300000 : 200000,
      hope: onlineValue.hope>11.99? 500000 : onlineValue.hope>8.99? 400000 : onlineValue.hope>5.99? 300000 : 200000,
      "4u": (onlineValue["4u"]>11.99? 500000 : onlineValue["4u"]>8.99? 400000 : onlineValue["4u"]>5.99? 300000 : 200000)/4*3,
      flare: (onlineValue.flare>11.99? 500000 : onlineValue.flare>8.99? 400000 : onlineValue.flare>5.99? 300000 : 200000)/4*3,
      short: 50000
    })
  },[onlineValue])
  useEffect(()=>{
    setOfflineTotal({
      cap: (personExpensesObject.offline.cap+offerOfflineExpensesObject.cap)*offlineRound.cap,
      hope: (personExpensesObject.offline.hope+offerOfflineExpensesObject.hope)*offlineRound.hope,
      "4u": (personExpensesObject.offline["4u"]+offerOfflineExpensesObject["4u"])*offlineRound["4u"],
      flare: (personExpensesObject.offline.flare+offerOfflineExpensesObject.flare)*offlineRound.flare,
      short: (personExpensesObject.offline.short+offerOfflineExpensesObject.short)*offlineRound.short,
    })
  },[offerOfflineExpensesObject, offlineRound])
  useEffect(()=>{
    setOnlineTotal({
      cap: (personExpensesObject.online.cap+offerOnlineExpensesObject.cap)*onlineRound.cap,
      hope: (personExpensesObject.online.hope+offerOnlineExpensesObject.hope)*onlineRound.hope,
      "4u": (personExpensesObject.online["4u"]+offerOnlineExpensesObject["4u"])*onlineRound["4u"],
      flare: (personExpensesObject.online.flare+offerOnlineExpensesObject.flare)*onlineRound.flare,
      short: (personExpensesObject.online.short+offerOnlineExpensesObject.short)*onlineRound.short,
    })
  },[offerOnlineExpensesObject, onlineRound])
  useEffect(()=>{
    setLastValue(offlineTotal.cap+offlineTotal.hope+offlineTotal["4u"]+offlineTotal.flare+offlineTotal.short+onlineTotal.cap+onlineTotal.hope+onlineTotal["4u"]+onlineTotal.flare+onlineTotal.short)
  },[offlineTotal, onlineTotal])
  return (
    <main>
      <h1>최종 집행비 : {lastValue}</h1>
      <table border={1}>
        <tr>
          <td>대면</td><td>평균인원</td><td>1회 인건비</td><td>1회 운영비</td><td>1회 집행비</td><td>회차</td><td>집행비</td>
        </tr>
        <tr>
          <td>CAP@</td>
          <td><input type="number" value={offlineValue.cap} onChange={e=>setOfflineValue({...offlineValue, cap: e.target.value})} /></td>
          <td>{personExpensesObject.offline.cap}</td>
          <td>{offerOfflineExpensesObject.cap}</td>
          <td>{personExpensesObject.offline.cap+offerOfflineExpensesObject.cap}</td>
          <td><input type="number" value={offlineRound.cap} onChange={e=>setOfflineRound({...offlineRound, cap: e.target.value})} /></td>
          <td>{offlineTotal.cap}</td>
        </tr>
        <tr>
          <td>취업희망</td>
          <td><input type="number" value={offlineValue.hope} onChange={e=>setOfflineValue({...offlineValue, hope: e.target.value})} /></td>
          <td>{personExpensesObject.offline.hope}</td>
          <td>{offerOfflineExpensesObject.hope}</td>
          <td>{personExpensesObject.offline.hope+offerOfflineExpensesObject.hope}</td>
          <td><input type="number" value={offlineRound.hope} onChange={e=>setOfflineRound({...offlineRound, hope: e.target.value})} /></td>
          <td>{offlineTotal.hope}</td>
        </tr>
        <tr>
          <td>4U</td>
          <td><input type="number" value={offlineValue["4u"]} onChange={e=>setOfflineValue({...offlineValue, "4u": e.target.value})} /></td>
          <td>{personExpensesObject.offline["4u"]}</td>
          <td>{offerOfflineExpensesObject["4u"]}</td>
          <td>{personExpensesObject.offline["4u"]+offerOfflineExpensesObject["4u"]}</td>
          <td><input type="number" value={offlineRound["4u"]} onChange={e=>setOfflineRound({...offlineRound, "4u": e.target.value})} /></td>
          <td>{offlineTotal["4u"]}</td>
        </tr>
        <tr>
          <td>신호탄</td>
          <td><input type="number" value={offlineValue.flare} onChange={e=>setOfflineValue({...offlineValue, flare: e.target.value})} /></td>
          <td>{personExpensesObject.offline.flare}</td>
          <td>{offerOfflineExpensesObject.flare}</td>
          <td>{personExpensesObject.offline.flare+offerOfflineExpensesObject.flare}</td>
          <td><input type="number" value={offlineRound.flare} onChange={e=>setOfflineRound({...offlineRound, flare: e.target.value})} /></td>
          <td>{offlineTotal.flare}</td>
        </tr>
        <tr>
          <td>단기집단</td>
          <td><input type="number" value={offlineValue.short} onChange={e=>setOfflineValue({...offlineValue, short: e.target.value})} /></td>
          <td>{personExpensesObject.offline.short}</td>
          <td>{offerOfflineExpensesObject.short}</td>
          <td>{personExpensesObject.offline.short+offerOfflineExpensesObject.short}</td>
          <td><input type="number" value={offlineRound.short} onChange={e=>setOfflineRound({...offlineRound, short: e.target.value})} /></td>
          <td>{offlineTotal.short}</td>
        </tr>
      </table>
      <table border={1}>
        <tr>
          <td>비대면</td><td>평균인원</td><td>1회 인건비</td><td>1회 운영비</td><td>1회 집행비</td><td>회차</td><td>집행비</td>
        </tr>
        <tr>
          <td>CAP@</td>
          <td><input type="number" value={onlineValue.cap} onChange={e=>setOnlineValue({...onlineValue, cap: e.target.value})} /></td>
          <td>{personExpensesObject.online.cap}</td>
          <td>{offerOnlineExpensesObject.cap}</td>
          <td>{personExpensesObject.online.cap+offerOnlineExpensesObject.cap}</td>
          <td><input type="number" value={onlineRound.cap} onChange={e=>setOnlineRound({...onlineRound, cap: e.target.value})} /></td>
          <td>{onlineTotal.cap}</td>
        </tr>
        <tr>
          <td>취업희망</td>
          <td><input type="number" value={onlineValue.hope} onChange={e=>setOnlineValue({...onlineValue, hope: e.target.value})} /></td>
          <td>{personExpensesObject.online.hope}</td>
          <td>{offerOnlineExpensesObject.hope}</td>
          <td>{personExpensesObject.online.hope+offerOnlineExpensesObject.hope}</td>
          <td><input type="number" value={onlineRound.hope} onChange={e=>setOnlineRound({...onlineRound, hope: e.target.value})} /></td>
          <td>{onlineTotal.hope}</td>
        </tr>
        <tr>
          <td>4U</td>
          <td><input type="number" value={onlineValue["4u"]} onChange={e=>setOnlineValue({...onlineValue, "4u": e.target.value})} /></td>
          <td>{personExpensesObject.online["4u"]}</td>
          <td>{offerOnlineExpensesObject["4u"]}</td>
          <td>{personExpensesObject.online["4u"]+offerOnlineExpensesObject["4u"]}</td>
          <td><input type="number" value={onlineRound["4u"]} onChange={e=>setOnlineRound({...onlineRound, "4u": e.target.value})} /></td>
          <td>{onlineTotal["4u"]}</td>
        </tr>
        <tr>
          <td>신호탄</td>
          <td><input type="number" value={onlineValue.flare} onChange={e=>setOnlineValue({...onlineValue, flare: e.target.value})} /></td>
          <td>{personExpensesObject.online.flare}</td>
          <td>{offerOnlineExpensesObject.flare}</td>
          <td>{personExpensesObject.online.flare+offerOnlineExpensesObject.flare}</td>
          <td><input type="number" value={onlineRound.flare} onChange={e=>setOnlineRound({...onlineRound, flare: e.target.value})} /></td>
          <td>{onlineTotal.flare}</td>
        </tr>
        <tr>
          <td>단기집단</td>
          <td><input type="number" value={onlineValue.short} onChange={e=>setOnlineValue({...onlineValue, short: e.target.value})} /></td>
          <td>{personExpensesObject.online.short}</td>
          <td>{offerOnlineExpensesObject.short}</td>
          <td>{personExpensesObject.online.short+offerOnlineExpensesObject.short}</td>
          <td><input type="number" value={onlineRound.short} onChange={e=>setOnlineRound({...onlineRound, short: e.target.value})} /></td>
          <td>{onlineTotal.short}</td>
        </tr>
      </table>
      <h2></h2>
    </main>
  );
}
export default App;