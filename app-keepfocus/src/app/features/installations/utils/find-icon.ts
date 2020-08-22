import {FocusGroupNode} from '../../../model/focusGroupNode.model';


export const iconSearch = () => (node: FocusGroupNode): string => {
  const {type} = node;

  enum GroupType {
    company = 'Company',
    housingDepartment = 'Housing Department',
    installations = 'Installation Group',
    housingBlock = 'Housing Block',
    housingDoor = 'Housing Door',
    installation = 'Installation',
    water = 'Water Meter',
    electricity = 'Electric Meter',
    heating = 'Heating Meter'
  }

  let iconString = '';

  switch (type) {
    case GroupType.company:
      iconString = 'company';
      break;
    case GroupType.housingDepartment:
      iconString = 'housing-department';
      break;
    case GroupType.installations:
      iconString = 'installations';
      break;
    case GroupType.housingBlock:
      iconString = 'housing-block';
      break;
    case GroupType.housingDoor:
      iconString = 'housing-door';
      break;
    case GroupType.installation:
      iconString = 'installation';
      break;
    case GroupType.water:
      iconString = 'water';
      break;
    case GroupType.electricity:
      iconString = 'electricity';
      break;
    case GroupType.heating:
      iconString = 'heating';
      break;
    default:
      iconString = '';
  }

  return iconString;
};
