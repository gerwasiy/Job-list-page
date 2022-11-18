export interface JobsModel {
  jobs: [
    {
      id: string;
      name: string;
      email: string;
      phone: string;
      title: string;
      salary: string;
      address: string;
      benefits: Array<string>;
      location: {
        lat: number;
        long: number;
      };
      pictures: [string, string, string];
      createdAt: string;
      updatedAt: string;
      description: string;
      employment_type: Array<string>;
    }
  ];
}
