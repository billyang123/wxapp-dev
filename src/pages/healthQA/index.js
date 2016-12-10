import wx from 'labrador';
import Navbar from '../../components/navbar/navbar';
export default class HealthIndex extends wx.Component {
	data = {
	};
	children = {
	    navbar: new Navbar({cur:1})
	};
}