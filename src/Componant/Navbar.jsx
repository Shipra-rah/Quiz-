import Shipralogo from '../assets/ShipraLogo.svg';
function Navbar() {
  return (
    <div className="w-full flex justify-center items-center absolute z-40">
      <img src={Shipralogo} alt="logo" className="h-16 object-contain"/>
    </div>
  );
}
export default Navbar;
