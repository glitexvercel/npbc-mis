import React from "react";
import {
  FeePaymentStatements,
  FinanceBanner,
  FinanceFeeStructure,
  FinanceStatsCards,
  StudentPortalLayout,
} from "@/components";

const Finances = () => {
  return (
    <StudentPortalLayout className={" inter"}>
      {/*  stats cards  */}
      <FinanceStatsCards />

      {/*  Banner  */}
      <FinanceBanner />

      {/* Fee Structure */}
      {/*<FinanceFeeStructure />*/}

      {/*  Fee Payment Table   */}
      <FeePaymentStatements />
    </StudentPortalLayout>
  );
};

export default Finances;
