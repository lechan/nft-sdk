interface Contract {
  contractId:          string;
  contractName:        string;
  contractSymbol:      string;
  contractAddress:     string;
  contractDescription: string;
  contractType:        string;
}

interface Property {
  name:  string;
  value: string;
}

export interface NftDetailResponse {
  isOwner:          boolean;
  isCreator:        string;
  id:               string;
  saleTime:         string;
  mediaType:        string;
  fileUrl:          string;
  coverUrl:         string;
  name:             string;
  description:      string;
  contactName:      string;
  companyName:      string;
  price:            string;
  restrictedAmount: string;
  remainingAmount:  string;
  scene:            string;
  tags:             string[];
  status:           string;
  category:         string;
  property:         Property[];
  contract:         Contract;
}
