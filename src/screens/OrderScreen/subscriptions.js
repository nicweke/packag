export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      status
      userId
      packageId
      updatedAt
      user {
        id
        username
      }
    }
  }
`;
export const onPackageUpdated = /* GraphQL */ `
  subscription OnPackageUpdated($id: ID!) {
    onPackageUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      createdAt
      updatedAt
     
    }
  }
`;