import { useProductsContext } from "../../contexts";

const AddressCard = ({ address, isEdit }) => {
  const { id, fullname, mobile, flat, area, city, pincode } = address;
  const { currentAddress, setCurrentAddress, updateAddress, deleteAddress } =
    useProductsContext();
  return (
    <label className="flex bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm">
      <input
        type="radio"
        name="address"
        id=""
        className="accent-current me-2"
        checked={id === currentAddress.id}
        onChange={() => setCurrentAddress(address)}
      />
      <div>
        <h3 className="text-lg font-semibold">{fullname}</h3>
        <p className="text-sm text-gray-500">
          {flat},{area}
        </p>
        <p className="text-sm text-gray-500">
          {city},{pincode}
        </p>
        <p className="text-sm text-gray-500">
          Mobile:
          <span className="font-semibold ps-1">{mobile}</span>
        </p>
        {isEdit && (
          <div className="flex gap-3 py-2">
            <button className="text-amber-500 font-bold">Edit</button>
            <button
              className="text-red-600 font-bold"
              onClick={() => deleteAddress(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </label>
  );
};
export default AddressCard;