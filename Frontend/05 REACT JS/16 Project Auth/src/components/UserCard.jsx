import React from 'react'

const UserCard = ({user}) => {

    const fullName = `${user.name.firstname} ${user.name.lastname}`;

  return (
      <div className=" w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
        
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold uppercase text-indigo-600 shadow-lg">
            {user.name.firstname[0]}
            {user.name.lastname[0]}
          </div>

          <h2 className="mt-4 text-2xl font-bold capitalize text-white">
            {fullName}
          </h2>

          <p className="mt-1 text-indigo-100">@{user.username}</p>
        </div>

        {/* User Info */}
        <div className="space-y-5 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
              📧
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-green-50 p-3 text-green-600">
              📞
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Phone
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {user.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-orange-50 p-3 text-orange-600">
              📍
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Address
              </p>
              <p className="mt-1 text-sm font-medium capitalize text-slate-700">
                {user.address.number} {user.address.street},{" "}
                {user.address.city}
              </p>
              <p className="text-sm text-slate-500">
                {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              User ID
            </span>

            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
              #{user.id}
            </span>
          </div>
        </div>
      </div>
  )
}

export default UserCard
