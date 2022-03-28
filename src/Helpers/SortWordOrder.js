const sortWordOrder = (subject, verb, object, wordOrder) => {
  switch (wordOrder) {
    case "SOV":
      return `${subject} ${object} ${verb} `;
    case "SVO":
      return `${subject} ${verb} ${object} `;
    case "VSO":
      return `${verb} ${subject} ${object} `;
    case "VOS":
      return `${verb} ${object} ${subject} `;
    case "OSV":
      return `${object} ${subject} ${verb} `;
    case "OVS":
      return `${object} ${verb} ${subject} `;
    default:
      return null;
  }
};

export default sortWordOrder;
