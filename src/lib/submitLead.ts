export const submitLead = async (data: any) => {

  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const res = await fetch(
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!,
    {
      method: "POST",
      body: formData
    }
  );

  return res;
};