import { profileData } from "../../../utils/data";

function Profile() {
  return (
    <div className="w-full flex items-center justify-center font-sans">
      <div className="w-11/12">
        <div className="flex items-center justify-between px-5 py-2 mt-5 lg:py-4 border rounded-md bg-gradient-to-tr from-[#216CB8] to-[#FFFFFF] shadow-lg">
          <h2 className="font-semibold text-white text-lg md:text-2xl">Account</h2>
          <button className="px-5 py-2 bg-[#063360] hover:bg-[#102e4b] text-white rounded-full border-none">
            Edit Profile
          </button>
        </div>
        <div className="mt-5 bg-gradient-to-b from-[#CFEAEC] to-[#216CB8] rounded-md p-5 border">
          <p className="font-semibold text-xl">Profile Picture</p>
          <div className="flex items-center gap-5 py-5">
            <img
              src="src/assets/profile.png"
              alt="Profile Picture"
              className="w-[100px]"
            />
            <div>
              <p className="text-lg font-semibold">Josh Swift</p>
              <p className="text-sm">Age: 23+ Years</p>
            </div>
          </div>
          <hr className="py-2" />
          <div className="hidden sm:block">
            <h2 className="text-2xl font-semibold">Appointments</h2>
            <table className="w-full">
              <thead className="grid grid-cols-3 items-center justify-center font-semibold py-5 text-xl">
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Date and Time</th>
                <th className="text-center">Services</th>
              </thead>
              <tbody>
                {profileData.map((item, i) => (
                  <tr
                    className="grid items-center grid-cols-3 my-5 bg-[#CFE5FE] px-5 py-2 rounded-md text-[#00305F] font-semibold"
                    key={i}
                  >
                    <td className="flex items-center gap-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-[50px] "
                      />
                      <p>{item.name}</p>
                    </td>
                    <td className="text-center">
                      {item.date} - {item.time}
                    </td>
                    <td className="text-center">{item.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="block md:hidden w-full">
            <h2 className="text-2xl font-semibold">Appointments</h2>
            <div className="w-full">
              {profileData.map((item, i) => (
                <table className="w-full bg-[#CFE5FE] rounded-md my-2" key={i}>
                  <tr className="flex items-center justify-between px-2 pt-5">
                    <td className="font-semibold">Doctor Name</td>
                    <td className="flex flex-col items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-[50px] "
                      />
                      <p>{item.name}</p>
                    </td>
                  </tr>

                  <tr className="flex items-center justify-between px-2 py-2">
                    <td className="font-semibold">Date and Time</td>
                    <td className="text-center">
                      {item.date} - {item.time}
                    </td>
                  </tr>

                  <tr className="flex items-center justify-between px-2 pb-5">
                    <td className="font-semibold">Services</td>
                    <td className="text-center">{item.service}</td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
