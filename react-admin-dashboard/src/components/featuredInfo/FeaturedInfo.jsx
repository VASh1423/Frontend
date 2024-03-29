import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featureTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSpan">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">-1.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSpan">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,5</span>
          <span className="featuredMoneyRate">+1.4<ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSpan">Compared to last month</span>
      </div>
    </div>
  )
}
