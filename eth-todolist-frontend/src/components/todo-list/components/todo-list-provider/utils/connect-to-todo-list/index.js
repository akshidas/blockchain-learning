import { ethers } from "ethers";
import abi from "./abi.json";

const connectToTodoList = async () => {
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

  await ethersProvider.send("eth_requestAccounts", []);
  const signer = ethersProvider.getSigner();

  try {
    const todoList = new ethers.Contract(
      "0x4ab0d52834968cc1a0849307af77fc75748105ac",
      abi,
      signer
    );

    return todoList;
  } catch (err) {
    console.log(err);
  }
};

export default connectToTodoList;
