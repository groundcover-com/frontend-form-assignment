import { CheckIcon } from '@heroicons/react/24/solid';
import { Button } from './components/button';
import { Description, Field, Label } from './components/fieldset';
import { Input } from './components/input';
import { Select } from './components/select';
import { Textarea } from './components/textarea';

const steps = [
  { id: '01', name: 'Profile', status: 'complete' },
  { id: '02', name: 'Personal information', status: 'current' },
  { id: '03', name: 'Address', status: 'upcoming' },
];

function App() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center w-full p-8">
      <div className="w-2xl">
        <nav aria-label="Progress">
          <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 dark:divide-white/15 dark:border-white/15">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex md:flex-1">
                {step.status === 'complete' ? (
                  <div className="group flex w-full items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 dark:bg-indigo-500 dark:group-hover:bg-indigo-400">
                        <CheckIcon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">
                        {step.name}
                      </span>
                    </span>
                  </div>
                ) : step.status === 'current' ? (
                  <div
                    aria-current="step"
                    className="flex items-center px-6 py-4 text-sm font-medium"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 dark:border-indigo-400">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {step.name}
                    </span>
                  </div>
                ) : (
                  <div className="group flex items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400 dark:border-white/15 dark:group-hover:border-white/25">
                        <span className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                          {step.id}
                        </span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                        {step.name}
                      </span>
                    </span>
                  </div>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 hidden h-full w-5 md:block"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 22 80"
                        preserveAspectRatio="none"
                        className="size-full text-gray-300 dark:text-white/15"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
        <form className="bg-white mt-8 w-full shadow-xs outline outline-gray-900/5 sm:rounded-xl md:col-span-2 dark:bg-gray-800/50 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <Field>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                  />
                </Field>
              </div>

              <div className="col-span-full">
                <Field>
                  <Label htmlFor="about">About</Label>
                  <Textarea
                    id="about"
                    name="about"
                    rows={3}
                    defaultValue={''}
                  />
                  <Description>
                    Write a few sentences about yourself.
                  </Description>
                </Field>
              </div>
            </div>
            <hr className="my-8 text-white" />
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <Field>
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                  />
                </Field>
              </div>
              <div className="sm:col-span-3">
                <Field>
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <div className="sm:col-span-4">
                <Field>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </Field>
              </div>
            </div>
            <hr className="my-8 text-white" />
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Field>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </Select>
                </Field>
              </div>

              <div className="col-span-full">
                <Field>
                  <Label htmlFor="street-address">Street address</Label>
                  <Input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                  />
                </Field>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Field>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                  />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field>
                  <Label htmlFor="region">State / Province</Label>
                  <Input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                  />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field>
                  <Label htmlFor="postal-code">ZIP / Postal code</Label>
                  <Input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                  />
                </Field>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 dark:border-white/10">
            <Button type="submit" color="indigo">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
