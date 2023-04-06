import { BigNumber, ethers, utils } from 'ethers';

export default function Escrow({
  address,
  arbiter,
  beneficiary,
  value,
  handleApprove,
}) {

  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> {arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {ethers.utils.formatEther(value)} ETH </div>
        </li>
        <div
          className="button"
          id={address}
          onClick={(e) => {
            e.preventDefault();

            handleApprove();
          }}
        >
          Approve
        </div>
      </ul>
    </div>
  );
}
//0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
//0xdD2FD4581271e230360230F9337D5c0430Bf44C0
