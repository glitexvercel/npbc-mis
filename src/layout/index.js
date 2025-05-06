import { ApplicationModal, LayoutHeader, Navbar } from "@/components";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Toaster } from "sonner";

const Layout = ({ children, hideApplication, showNavigation = false }) => {
  const router = useRouter();

  const query = router.query;

  /**
   * @type {boolean}
   * @description handles the launch of the application(components/modal/application) modal
   */
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  /**
   * @method
   * @return void
   * @desc extracts apply query from the url
   */
  const handleQuery = () => {
    //     If a query name apply is passed, show the application modal.
    const applicationQuery = query?.apply;

    if (applicationQuery) {
      setShow(applicationQuery);
    } else {
      setShow(false);
    }
  };

  /**
   * @return void
   * @desc deletes apply query passed via url
   */
  function removeQueryParams() {
    router.push(router.pathname);
  }

  /**
   * @return void
   * @desc closes the applicatoin modal
   */
  const handleCloseApplicationModal = () => {
    removeQueryParams();
    setShow(false);
  };
  useEffect(() => {
    //     Listen for query change
    handleQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <main className="relative overflow-x-hidden overflow-y-hidden bg-white max-w-screen">
      <LayoutHeader showModal={handleOpenModal} />

      {/*  Application Modal    */}
      {show && (
        <ApplicationModal
          isOpen={show}
          handleCloseModal={handleCloseApplicationModal}
        />
      )}

      {/* Navbar */}
      {showNavigation && <Navbar />}

      {/* children */}
      {children}

      {/* Footer */}
      <Footer hideApplication={hideApplication} showModal={handleOpenModal} />
    </main>
  );
};

export default Layout;
