/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      packageId
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
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
      orders {
        items {
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
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
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
        }
        nextToken
      }
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      home {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      work {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
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
        }
        nextToken
      }
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      home {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      work {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
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
        }
        nextToken
      }
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      home {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      work {
        id
        latitude
        longitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePackage = /* GraphQL */ `
  subscription OnCreatePackage {
    onCreatePackage {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
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
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePackage = /* GraphQL */ `
  subscription OnUpdatePackage {
    onUpdatePackage {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
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
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePackage = /* GraphQL */ `
  subscription OnDeletePackage {
    onDeletePackage {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
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
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHome = /* GraphQL */ `
  subscription OnCreateHome {
    onCreateHome {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome {
    onUpdateHome {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome {
    onDeleteHome {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWork = /* GraphQL */ `
  subscription OnCreateWork {
    onCreateWork {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWork = /* GraphQL */ `
  subscription OnUpdateWork {
    onUpdateWork {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWork = /* GraphQL */ `
  subscription OnDeleteWork {
    onDeleteWork {
      id
      latitude
      longitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      status
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      packageId
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      status
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      packageId
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      status
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        package {
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
        home {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        work {
          id
          latitude
          longitude
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      packageId
      package {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
