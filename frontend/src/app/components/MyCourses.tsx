"use client";
import React, { useEffect, useState } from "react";
// import { useContractRead} from "wagmi";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain/index";
import { useReadContract } from "wagmi";
import CourseCard from "./CourseCard";

interface MyCoursesProps {
  address: string
}

function MyCourses({address}: MyCoursesProps) {
  const [courses, setCourses] = useState<any[]>([]);
  const result = useReadContract({
    abi: AcademicManagerSmartContractABI,
    address: AcademicManagerSmartContractAddress,
    functionName: "getCoursesByStudent",
    args: [address],
  });

  useEffect(() => {
    if (Array.isArray(result.data)) {
      setCourses(result.data);
    }
  }, [result.data])

  return (
    <div className="w-full flex flex-col gap-8">
      {!courses ? (
        <p className="">Nenhum curso matriculado</p>
      ) : (
        <div className="w-full md:[w-80%] bg-red-300 flex flex-col gap-4">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} showEnrollButton={false}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourses;
