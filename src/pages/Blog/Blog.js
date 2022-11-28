import React from "react";

const Blog = () => {
	return (
		<section className="mx-10">
			<article className="my-5">
				<h1 className="text-3xl my-5">
					What are the different ways to manage a state in a React application?
				</h1>
				<div className="text-xl">
					Every React component has a built-in state. This state is an object
					which stores the property values that belong to a component. State is
					able to keep data from different components in-sync because each state
					update re-renders all relevant components.
				</div>

				<div className="text-xl">
					The built-in way that React provides for setting component states is
					by using setState() and adding “local state” to a class. There are
					several other ways to manage state​s in React, including the use of:
					Hooks React Context API Apollo Link State We will, however, focus on
					the use of the setState() method.
				</div>
				<h4 className="text-xl font-semibold">Using setState()</h4>
				<div className="text-xl">
					The built-in setState() method updates a variable’s value in the
					classes’ local store. This local store allows the updated variable
					values to be accessed by any function that may require these values.
					setState() tells React that this component and its children (sometimes
					delayed and grouped into a single batch) should be re-rendered with
					the most updated state; this re-render is often based on
					user-triggered events.
				</div>
			</article>
			<article className="my-5">
				<h1 className="text-3xl my-5">
					How does prototypical inheritance work?
				</h1>
				<div className="text-xl">
					Everything in Javascript is an object. Even when creating a Class is
					an Object via an Object Literal or Constructor Function. This is how
					Javascript does class-based programming as to other traditional
					Object-Oriented Programming languages where they use the keyword
					‘class’ and ‘inheritance’.
				</div>

				<div className="text-xl">
					Javascript’s version of class-based programming and other traditional
					class-based programming languages work with the same concept but does
					not work exactly similar. There are differences in its keyword,
					syntax, and how it works. There are also debates regarding pros and
					cons of Javascript’s version of class-based programming, but for
					simplicity’s sake and learning purposes, I do not want to go over
					those issues. See details here
				</div>

				<div className="text-xl">
					So, the core idea of Prototypal Inheritance is that an object can
					point to another object and inherit all its properties. The main
					purpose is to allow multiple instances of an object to share common
					properties, hence, the Singleton Pattern.
				</div>
			</article>
			<article className="my-5">
				<h1 className="text-3xl my-5">What is a unit test?</h1>
				<div className="text-xl">
					A unit test is a way of testing a unit - the smallest piece of code
					that can be logically isolated in a system. In most programming
					languages, that is a function, a subroutine, a method or property. The
					isolated part of the definition is important. In his book "Working
					Effectively with Legacy Code", author Michael Feathers states that
					such tests are not unit tests when they rely on external systems: “If
					it talks to the database, it talks across the network, it touches the
					file system, it requires system configuration, or it can't be run at
					the same time as any other test."
				</div>

				<div className="text-xl">
					Modern versions of unit testing can be found in frameworks like JUnit,
					or testing tools like TestComplete. Look a little further and you will
					find SUnit, the mother of all unit testing frameworks created by Kent
					Beck, and a reference in chapter 5 of The Art of Software Testing .
					Before that, it's mostly a mystery. I asked Jerry Weinberg about his
					experiences with unit testing -- "We did unit testing in 1956. As far
					as I knew, it was always done, as long as there were computers".
					Regardless of when and where unit testing began, one thing is for
					sure. Unit testing is here to stay. Let's look at some more practical
					aspects of unit testing.
				</div>
			</article>
			<article className="my-5">
				<h1 className="text-3xl my-5"> Why should we write unit tests?</h1>
				<div className="text-xl">
					To justify any effort in business, there must be a positive impact on
					the bottom line. Here are a few benefits to writing unit tests:
				</div>
				<ol type="number" className="text-xl mt-5">
					<li>
						Unit tests save time and money. Usually, we tend to test the happy
						path more than the unhappy path. If you release such an app without
						thorough testing, you would have to keep fixing issues raised by
						your potential users. The time to fix these issues could’ve been
						used to build new features or optimize the existing system. Bear in
						mind that fixing bugs without running tests could also introduce new
						bugs into the system.
					</li>
					<li>
						Well-written unit tests act as documentation for your code. Any
						developer can quickly look at your tests and know the purpose of
						your functions.
					</li>
					<li>It simplifies the debugging process.</li>
					<li>
						Unit testing is an integral part of extreme programming. Extreme
						programming is basically a “test-everything-that-can-possibly-break”
						programming strategy.
					</li>
					<li>
						Unit tests make code reuse easier. If you want to reuse existing
						code in a new project, you can simply migrate both the code and
						tests to your new project, then run your tests to make sure you have
						the desired results.
					</li>
					<li>
						Unit testing improves code coverage. A debatable topic is to have
						100% code coverage across your application.
					</li>
				</ol>
			</article>
			<article className="my-5">
				<h1 className="text-3xl my-5">React vs. Angular vs. Vue?</h1>
				<h2 className="text-2xl font-semibold">Angular</h2>
				<div className="text-xl ">
					Angular definitely is the "biggest" framework of the three. It's
					sometimes even called a "platform" rather than a framework. Because
					Angular out of the box includes support for a lot of things. It helps
					you (= the developer) with controlling the UI, reacting to user input,
					validating user input in forms, routing, state management sending Ajax
					Http requests, providing offline support & PWA capabilities, testing,
					building your application, managing multiple applications and
					connecting them and much, much more! All frameworks have the goal of
					making it easier for you, as a developer, to build reactive, complex
					user interfaces. But Angular gives you the full set of tools for that.
					It doesn't stop after DOM manipulation support - it adds the
					above-mentioned features to help you with any aspect you could require
					in apps you're working on.
				</div>
				<h2 className="text-2xl font-semibold">React</h2>
				<div className="text-xl ">
					Where Angular gives you everything, React gives you only one thing: A
					library for rendering content to the DOM and controlling it
					efficiently thereafter. It's also all about components and all about
					building user interfaces from components. It also gives you all the
					"tools" you need to define what should be rendered in which way under
					which circumstances. But it does not include built-in form validation
					support. It does not include a router (for rendering different
					components based on URL changes) and it does not ship its own Http
					client. It has some state management support built-in but not for all
					scenarios. It also does not come with any other special features and
					it's definitely "slimmer" than Angular in that regard. For those
					features, you have to rely on the (arguably quite active) React
					community.
				</div>
				<h2 className="text-2xl font-semibold">Vue</h2>
				<div className="text-xl ">
					Vue is a framework which kind of sits between React and Angular. It's
					not as "big" as Angular but it definitely includes more features than
					React does. Vue does give you built-in state management and it also
					ships with a built-in router. It does, however, not include form
					validation or Http client functionalities. Just like Angular and
					React, the core of Vue is all about building user interfaces by
					combining re-usable components. But beyond that, it gives you a bit
					more than React and a bit less than Angular.
				</div>
			</article>
		</section>
	);
};

export default Blog;
