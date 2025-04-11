export const fetchCompanyData = async () => {
    const response = await fetch('./data/CompanyInfo.json');
    const data = await response.json();
    console.log(data);
    return data;
}